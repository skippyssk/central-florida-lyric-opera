export interface EmailJSResponse {
  status: number;
  text: string;
  message?: string;
}

export interface EmailJSError {
  text?: string;
  message?: string;
  status?: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface Show {
  id?: string;
  title: string;
  date: string;
  time?: string;
  venue: string;
  description: string;
  image: string;
  available: boolean;
  buttonText?: string;
  ticketLink?: string;
}

export interface ShowListShow {
  title: string;
  date: string;
  time?: string;
  venue: string;
  description: string;
  image: string;
  available: boolean;
  buttonText?: string;
  ticketLink?: string;
}

