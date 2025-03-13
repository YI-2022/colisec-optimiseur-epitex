
import { TrackingInfo } from '@/components/TrackingResult';

/**
 * Mock tracking data for demonstration purposes
 */
const mockTrackingData: Record<string, TrackingInfo> = {
  "COL123456": {
    trackingNumber: "COL123456",
    shipper: "Entreprise ABC",
    recipient: "Jean Dupont",
    destinationAddress: "Paris, France",
    weight: "2,5 kg",
    shipmentType: "Express",
    status: "En transit",
    estimatedDelivery: "25/06/2024",
    steps: [
      {
        title: "Commande validée",
        date: "20/06/2024",
        time: "09:15",
        location: "Lyon, France",
        completed: true,
        current: false
      },
      {
        title: "Pris en charge par l'agence de départ",
        date: "21/06/2024",
        time: "10:30",
        location: "Lyon, France",
        completed: true,
        current: false
      },
      {
        title: "En transit vers l'agence de distribution",
        date: "22/06/2024",
        time: "14:45",
        location: "En route vers Paris",
        completed: true,
        current: true
      },
      {
        title: "Colis en cours de livraison",
        date: "Non disponible",
        time: "Non disponible",
        completed: false,
        current: false
      },
      {
        title: "Colis livré au destinataire",
        date: "Non disponible",
        time: "Non disponible",
        completed: false,
        current: false
      }
    ]
  },
  "COL789012": {
    trackingNumber: "COL789012",
    shipper: "Société XYZ",
    recipient: "Marie Martin",
    destinationAddress: "Marseille, France",
    weight: "1,2 kg",
    shipmentType: "Standard",
    status: "Livré",
    estimatedDelivery: "19/06/2024",
    steps: [
      {
        title: "Commande validée",
        date: "15/06/2024",
        time: "11:20",
        location: "Nice, France",
        completed: true,
        current: false
      },
      {
        title: "Pris en charge par l'agence de départ",
        date: "16/06/2024",
        time: "08:45",
        location: "Nice, France",
        completed: true,
        current: false
      },
      {
        title: "En transit vers l'agence de distribution",
        date: "17/06/2024",
        time: "14:30",
        location: "En route vers Marseille",
        completed: true,
        current: false
      },
      {
        title: "Colis en cours de livraison",
        date: "19/06/2024",
        time: "09:10",
        location: "Marseille, France",
        completed: true,
        current: false
      },
      {
        title: "Colis livré au destinataire",
        date: "19/06/2024",
        time: "11:45",
        location: "Marseille, France",
        completed: true,
        current: false
      }
    ]
  },
  "COL345678": {
    trackingNumber: "COL345678",
    shipper: "Entreprise LMN",
    recipient: "Philippe Dubois",
    destinationAddress: "Bordeaux, France",
    weight: "3,8 kg",
    shipmentType: "Standard",
    status: "En attente",
    reason: "Adresse incomplète",
    estimatedDelivery: "Indisponible",
    steps: [
      {
        title: "Commande validée",
        date: "18/06/2024",
        time: "15:20",
        location: "Lille, France",
        completed: true,
        current: false
      },
      {
        title: "Pris en charge par l'agence de départ",
        date: "19/06/2024",
        time: "09:30",
        location: "Lille, France",
        completed: true,
        current: false
      },
      {
        title: "En attente - Information complémentaire requise",
        date: "19/06/2024",
        time: "14:15",
        location: "Lille, France",
        completed: true,
        current: true
      },
      {
        title: "En transit vers l'agence de distribution",
        date: "Non disponible",
        time: "Non disponible",
        completed: false,
        current: false
      },
      {
        title: "Colis en cours de livraison",
        date: "Non disponible",
        time: "Non disponible",
        completed: false,
        current: false
      },
      {
        title: "Colis livré au destinataire",
        date: "Non disponible",
        time: "Non disponible",
        completed: false,
        current: false
      }
    ]
  }
};

export const getTrackingInfo = (trackingNumber: string): Promise<TrackingInfo> => {
  // Simulate API call delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Check if tracking number exists in our mock data
      if (trackingNumber in mockTrackingData) {
        resolve(mockTrackingData[trackingNumber]);
      } else if (trackingNumber === "COL111111") {
        // Special case for processing status
        reject({
          code: "PROCESSING",
          message: "Votre colis est en cours de traitement. Veuillez réessayer plus tard."
        });
      } else {
        // Invalid tracking number
        reject({
          code: "NOT_FOUND",
          message: "Numéro de suivi introuvable. Vérifiez votre saisie ou contactez notre support."
        });
      }
    }, 1500); // Simulate network delay
  });
};
