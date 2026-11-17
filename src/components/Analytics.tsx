import Script from "next/script";

/**
 * Contador de visitas con GoatCounter (panel en https://mateohdz.goatcounter.com).
 * No usa cookies ni guarda datos personales: cuenta visitas, de dónde vienen (por ejemplo
 * `?ref=instagram`), país, dispositivo y los clics marcados con `data-goatcounter-click`.
 * No cuenta en localhost ni en la red local, así que las pruebas en desarrollo no suman.
 */
export function Analytics() {
  return <Script data-goatcounter="https://mateohdz.goatcounter.com/count" src="https://gc.zgo.at/count.js" strategy="afterInteractive" />;
}
