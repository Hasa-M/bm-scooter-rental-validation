import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name:"Scooter Bosa", short_name:"Scooter Bosa", description:"Richieste di disponibilità per scooter 125cc a Bosa.", start_url:"/it", display:"standalone", background_color:"#fffaf1", theme_color:"#164a42", icons:[{ src:"/favicon.svg", sizes:"any", type:"image/svg+xml" }] };
}
