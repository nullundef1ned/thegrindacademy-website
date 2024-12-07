import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
// import { formatPhoneNumberIntl, isValidPhoneNumber } from "react-phone-number-input"

// const formatPhoneNumber = (phoneNumber: string): string => {
//   if (!isValidPhoneNumber(phoneNumber)) {
//     return ''
//   }

//   return formatPhoneNumberIntl(phoneNumber).replace(' ', '-').replaceAll(' ', '')
// }

const formatDate = (date: string): string => {
  const dateTime = new Date(date);
  return Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(dateTime);
}

const formatTime = (date: string): string => {
  const dateTime = new Date(date);
  return Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).format(dateTime);
}

const getTimeDelta = (date: string) => {
  const pastTime = new Date(date);
  const now = new Date();
  const delta = now.getTime() - pastTime.getTime();
  const seconds = Math.floor(delta / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) {
    return "a few moments ago";
  } else if (minutes < 2) {
    return "1 minute ago";
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 2) {
    return "1 hour ago";
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (days < 2) {
    return "1 day ago";
  } else if (days < 30) {
    return `${days} days ago`;
  } else if (months < 2) {
    return "1 month ago";
  } else if (months < 12) {
    return `${months} months ago`;
  } else if (years < 2) {
    return "A year ago";
  } else {
    return `${years} years ago`;
  }
}

const capitalize = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const downloadFile = (url: string, filename: string) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const convertToNumber = (value: string | number): number => {
  return typeof value == 'string' ? parseFloat(value) : value;
}

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

const helperUtil = { getTimeDelta, formatDate, formatTime, capitalize, downloadFile, convertToNumber }

export default helperUtil