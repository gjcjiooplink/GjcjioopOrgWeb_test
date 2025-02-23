export type BookingMethod = 'offline' | 'online' | 'message';

export interface OfflineMeetingData {
  location: string;
  address: string;
  meetingDate: string;
  meetingTime: string;
  contactInfo: string;
  name: string;
}

export interface OnlineMeetingData {
  meetingDate: string;
  meetingTime: string;
  platform: string;
  accountId: string;
  contactInfo: string;
  name: string;
}

export type BookingData = OfflineMeetingData | OnlineMeetingData;

