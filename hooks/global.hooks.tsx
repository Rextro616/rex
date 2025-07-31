import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i;

export function customHook() {
  const { hash } = useLocation();
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setTarget(element);
      }
    }
  }, [hash]);

  return { target };
}

export interface FormItem {
  titulo: string;
  placeholder: string;
  tipo: 'text' | 'email' | 'number' | 'url' | 'select';
  requiereValidacion?: boolean;
  obligatorio?: boolean;
  maxLongitud?: number;
  opciones?: { valor: string; titulo: string }[];
}

export function useForm(items: FormItem[]) {
  const initialState: Record<string, string> = {};
  const initialErrors: Record<string, string> = {};

  items.forEach((item) => {
    initialState[item.titulo] = '';
    initialErrors[item.titulo] = '';
  });

  const [values, setValues] = useState<Record<string, string>>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>(initialErrors);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    items.forEach((item) => {
      const value = values[item.titulo]?.toString().trim();
      const required = item.requiereValidacion;

      if (required && !value) {
        newErrors[item.titulo] = 'Este campo es obligatorio';
        return;
      }

      if (item.tipo === 'email' && value && !emailRegex.test(value)) {
        newErrors[item.titulo] = 'Correo no válido';
      } else if (item.tipo === 'number' && value && (!/^\d+$/.test(value) || (item.maxLongitud && value.length !== item.maxLongitud))) {
        newErrors[item.titulo] = 'Número no válido';
      } else if (item.tipo === 'url' && value && !urlRegex.test(value)) {
        newErrors[item.titulo] = 'URL no válida';
      } else if (item.tipo === 'select' && required && (!value || value === '' || value === item.placeholder)) {
        newErrors[item.titulo] = 'Seleccione una opción válida';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValues({ ...values, [field]: e.target.value });
    setErrors({ ...errors, [field]: '' });
  };

  const onSubmit = (action: (values: Record<string, string>) => void) => (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      action(values);
    }
  };

  return {
    values,
    errors,
    handleChange,
    validate,
    onSubmit,
  };
}
