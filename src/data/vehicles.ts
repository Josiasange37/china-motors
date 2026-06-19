export interface Vehicle {
  id: number;
  title: string;
  image: string;
  fuel: string;
  year: string;
  mileage: string;
  transmission: string;
  price: string;
  description?: string;
  color?: string;
  engine?: string;
  drive?: string;
  seats?: string;
}

export const vehicles: Vehicle[] = [
  { id: 13, title: "Jetour Liberty 2025 1.5TD DCT Discovery", image: "fc8feb80-6cac-425c-831d-55528166fce5.jpg", fuel: "Gasoline", year: "2025.03", mileage: "12,000", transmission: "DCT", price: "FCFA 6,000,000+" },
  { id: 106, title: "Jetour Shanhai L9 2025 1.5TD 2DHT Luxury 7-seater", image: "b2dd84e6-45c6-4c5e-b2ca-21a8e8a025d7.jpg", fuel: "PHEV", year: "2025.06", mileage: "10,000", transmission: "Hybrid Dedicated Transmission (DHT)", price: "FCFA 6,000,000+" },
  { id: 96, title: "Changan UNI-K 2021 2.0T Luxury", image: "24f1ba89-f0b0-46de-9e4c-0e58c9d1e1c9.jpg", fuel: "Gasoline", year: "2022.05", mileage: "40,000", transmission: "Automatic", price: "FCFA 6,000,000+" },
  { id: 86, title: "Jetour Shanhai Jetour T2 C-DM 2024 C-DM 129KM Linye Edition", image: "b6f26df1-10e2-4835-a8bf-2fe446f638d0.jpg", fuel: "PHEV", year: "2024.11", mileage: "30,000", transmission: "Dedicated Hybrid Transmission (DHT)", price: "FCFA 12,000,000+" },
  { id: 80, title: "Geely Coolray 2025 Model 1.5TD Quyeba", image: "49dd7f74-6b7d-4722-99ac-be7d61307a4d.jpg", fuel: "Gasoline", year: "2025.07", mileage: "8,000", transmission: "DCT", price: "FCFA 6,000,000+" },
  { id: 25, title: "Toyota RAV4 2020 2.0L CVT Front-Wheel Drive Trend Edition", image: "381232cb-9f29-4b72-aa42-70c07cf233c0.jpg", fuel: "Gasoline", year: "2021.01", mileage: "50,000", transmission: "CVT", price: "FCFA 6,000,000+" },
  { id: 18, title: "Landwind X7 2015 2.0T Panoramic Luxury Edition", image: "4e239ad0-1b86-41d2-bc97-f6ab097f8dab.jpg", fuel: "Gasoline", year: "2015.09", mileage: "60,000", transmission: "Automatic", price: "FCFA 1,800,000+" },
  { id: 6, title: "Changan Lantuo Zhe 2023 2.0T Automatic 4WD Gas Flagship Standard Box", image: "d34c8abe-0cdd-44a0-ba79-533187f7a50d.jpg", fuel: "Gasoline", year: "2022.11", mileage: "13,000", transmission: "Automatic", price: "FCFA 6,000,000+" },
];

export const allVehicles: Vehicle[] = [
  ...vehicles,
  { id: 1, title: "Jetour Shanhai L9 2025", image: "004870d4-f3c8-4183-b173-23a2160cf9f6.jpg", fuel: "PHEV", year: "2025", mileage: "5,000", transmission: "DHT", price: "FCFA 12,000,000+" },
  { id: 2, title: "BYD Song Plus DM-i 2024", image: "0304303e-0aed-4272-ba50-b8055a5bc078.jpg", fuel: "PHEV", year: "2024", mileage: "15,000", transmission: "E-CVT", price: "FCFA 6,000,000+" },
  { id: 3, title: "Haval H6 2023 1.5T", image: "033a3d00-109c-44e0-a456-e715af423c07.jpg", fuel: "Gasoline", year: "2023", mileage: "20,000", transmission: "DCT", price: "FCFA 6,000,000+" },
  { id: 4, title: "Changan CS75 Plus 2024", image: "074ec180-7eaf-46d5-b751-4f9ee8683e75.jpg", fuel: "Gasoline", year: "2024", mileage: "10,000", transmission: "Automatic", price: "FCFA 6,000,000+" },
  { id: 5, title: "Jetour X70 Plus 2023", image: "08deb73b-2d75-402c-8354-46eaf1ac0d69.jpg", fuel: "Gasoline", year: "2023", mileage: "18,000", transmission: "DCT", price: "FCFA 6,000,000+" },
  { id: 7, title: "Geely Monjaro 2024 2.0T", image: "09390dad-5631-4a31-b077-42796c52fe90.jpg", fuel: "Gasoline", year: "2024", mileage: "8,000", transmission: "Automatic", price: "FCFA 12,000,000+" },
  { id: 8, title: "BYD Qin Plus DM-i 2024", image: "09788331-8e8b-4698-ae5a-041c7117f0a9.jpg", fuel: "PHEV", year: "2024", mileage: "12,000", transmission: "E-CVT", price: "FCFA 6,000,000+" },
  { id: 9, title: "Toyota Camry 2021 2.5L", image: "0b70a890-4551-42fe-bb7b-e432ffde7165.jpg", fuel: "Gasoline", year: "2021", mileage: "45,000", transmission: "Automatic", price: "FCFA 6,000,000+" },
  { id: 10, title: "Hyundai Elantra 2022 1.6L", image: "0c98265a-f460-465f-a813-c5904548c0ea.jpg", fuel: "Gasoline", year: "2022", mileage: "30,000", transmission: "CVT", price: "FCFA 6,000,000+" },
  { id: 11, title: "Volkswagen Passat 2023 2.0T", image: "0d56b9b6-e4ec-4e4d-b966-6bcb93416d65.jpg", fuel: "Gasoline", year: "2023", mileage: "15,000", transmission: "DSG", price: "FCFA 6,000,000+" },
  { id: 12, title: "BMW X3 2022 xDrive30i", image: "0ec10da8-ea9a-4068-be49-0c7e16a2756d.jpg", fuel: "Gasoline", year: "2022", mileage: "25,000", transmission: "Automatic", price: "FCFA 12,000,000+" },
  { id: 14, title: "Porsche Cayenne 2021 3.0T", image: "0f4d1ab0-d56a-4440-b005-2be93cf39f9c.jpg", fuel: "Gasoline", year: "2021", mileage: "35,000", transmission: "Automatic", price: "FCFA 24,000,000+" },
  { id: 15, title: "Maserati Levante 2020 3.0T", image: "0f79e29e-fa4e-48f4-b901-928701355998.jpg", fuel: "Gasoline", year: "2020", mileage: "40,000", transmission: "Automatic", price: "FCFA 24,000,000+" },
  { id: 16, title: "Zotye T600 2022 1.5T", image: "10b42c85-4947-401f-845b-d0403611d87d.jpg", fuel: "Gasoline", year: "2022", mileage: "20,000", transmission: "DCT", price: "FCFA 4,800,000+" },
  { id: 17, title: "Buick GL8 2023 2.0T Luxury", image: "10cb3401-e422-48f9-a2be-6f0b6c950a48.jpg", fuel: "Gasoline", year: "2023", mileage: "12,000", transmission: "Automatic", price: "FCFA 12,000,000+" },
];

export function getVehicleById(id: number): Vehicle | undefined {
  return allVehicles.find((v) => v.id === id);
}

export const vehicleDetails: Record<number, Partial<Vehicle>> = {
  13: { description: "The Jetour Liberty 2025 is a stylish and modern SUV combining powerful performance with advanced technology. Equipped with a 1.5TD engine and DCT transmission, it delivers smooth acceleration and excellent fuel economy.", color: "White", engine: "1.5TD Turbo", drive: "Front-Wheel Drive", seats: "5" },
  106: { description: "The Jetour Shanhai L9 is a premium plug-in hybrid SUV offering luxurious comfort for 7 passengers. With advanced 2DHT technology, it delivers exceptional fuel efficiency without compromising on power.", color: "Silver", engine: "1.5TD + Electric Motor", drive: "Front-Wheel Drive", seats: "7" },
  96: { description: "The Changan UNI-K is a bold and futuristic SUV with a striking design language. Its 2.0T engine provides ample power while the luxurious interior offers premium comfort for all passengers.", color: "Gray", engine: "2.0T Turbo", drive: "Front-Wheel Drive", seats: "5" },
  86: { description: "The Jetour T2 C-DM is a rugged plug-in hybrid SUV designed for both urban commuting and off-road adventures. Its 129KM electric range covers most daily commutes with zero emissions.", color: "Green", engine: "1.5TD + Electric Motor", drive: "Front-Wheel Drive", seats: "5" },
  80: { description: "The Geely Coolray is a sporty and dynamic compact SUV with bold styling and responsive handling. Perfect for urban driving with its turbocharged engine and quick-shifting DCT.", color: "Blue", engine: "1.5TD Turbo", drive: "Front-Wheel Drive", seats: "5" },
  25: { description: "The Toyota RAV4 is a globally trusted SUV known for reliability and practicality. This 2020 model features a fuel-efficient 2.0L engine with smooth CVT transmission.", color: "White", engine: "2.0L Naturally Aspirated", drive: "Front-Wheel Drive", seats: "5" },
  18: { description: "The Landwind X7 is a spacious and comfortable SUV offering excellent value. With its panoramic sunroof and luxury interior features, it provides a premium driving experience at an affordable price.", color: "Brown", engine: "2.0T Turbo", drive: "Front-Wheel Drive", seats: "5" },
  6: { description: "The Changan Lantuo Zhe (Hunter) is a rugged pickup truck built for tough jobs. With 4WD capability and a powerful 2.0T engine, it handles both work sites and highway driving with ease.", color: "Gray", engine: "2.0T Turbo", drive: "4WD", seats: "5" },
};
