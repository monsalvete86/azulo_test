
export interface AirportEntry {
    id: number,
    name: string,
    airport_code: string,
    airport_operator_id: number,
    location_id: number,
    priority_order: number,
}

export type NewAirportEntry = Omit<AirportEntry, 'id'>;