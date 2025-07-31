export async function fetchCB(
  ruta: string,
  datos: any = null,
  method: string,
  responseType: 'json' | 'arraybuffer' = 'json'
): Promise<any> {
  const url: string = `${import.meta.env.VITE_CB_URL}/${ruta}`;
  console.log(`Haciendo solicitud a: ${url}`);

  // Validación para permitir HTTP según configuración
  const allowHttp = import.meta.env.VITE_ALLOW_HTTP === 'true';
  if (
    import.meta.env.MODE === 'production' &&
    url.startsWith('http://') &&
    !allowHttp
  ) {
    throw new Error('Solicitudes HTTP no permitidas en producción. Usa HTTPS o habilita VITE_ALLOW_HTTP.');
  }

  const headers: Record<string, string> = {};
  if (method.toUpperCase() !== 'GET') {
    headers['Content-Type'] = 'application/json';
  }

  const options: RequestInit = {
    method,
    headers,
  };

  if (datos && ["POST", "PUT", "PATCH"].includes(method.toUpperCase())) {
    options.body = JSON.stringify(datos);
  }

  try {
    const respuesta = await fetch(url, options);

    if (!respuesta.ok) {
      const errorText = await respuesta.text();
      throw new Error(`Error en la solicitud: ${respuesta.status} ${respuesta.statusText} - ${errorText}`);
    }

    const contentType = respuesta.headers.get('content-type');

    if (responseType === 'arraybuffer' || contentType?.includes('application/pdf')) {
      const arrayBuffer = await respuesta.arrayBuffer();
      return arrayBuffer;
    }

    return await respuesta.json();
  } catch (ex) {
    console.error(`Error fetching CB: ${ex}`);
    throw ex;
  }
}
