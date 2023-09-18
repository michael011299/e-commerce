export interface StoresInterface {
    storeId: number
      storeType: string
      locationType: string
      tradeIn: string | null
      brand: string | null
      name: string
      longName: string
      address: string
      address2: string,
      city: string,
      region: string,
      fullPostalCode: string,
      country: string,
      lat: number,
      lng: number,
      hours: string
      hoursAmPm: string
      gmtOffset: number
      language: string
      services: Array<T>
      phone: string
      postalCode: string
}

interface T{
    service: string
}