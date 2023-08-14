import React from 'react'
import { History, HistorySection } from '../interfaces/history';

const months : {[key: string]: number} = {
  "JAN" : 0, "Feb": 1, "Mar": 2, "Apr": 3, "May": 4, "Jun" : 5,
  "Jul" : 6, "Aug" : 7, "Sep" : 8, "Oct" : 9, "Nov" : 10, "Dec": 11
}

export const useHistoryList = ({movements} : {movements : History[]}) => {

  const getMovementsInSections: () => HistorySection[] = () => {
    const todayItems = getFilteredMovements(new Date());
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() -1)
    const yesterdayItems = getFilteredMovements(yesterday)
    const lastWeek = getLastWeek()
    const sections: HistorySection[] = [
      {
        title: 'Hoy',
        data: todayItems,
      },
      {
        title: "Ayer", 
        data: yesterdayItems
      },
      {
        title: "Semana anterior",
        data: lastWeek
      }
    ];

    return sections;
  };

  const getLastWeek = () => {
    const today = new Date();
    const startWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7)
    return getFilteredMovements(startWeek, today)
  }

  const getFilteredMovements = (startDate: Date, endDate?: Date) => {
    const filteredMovements = movements.filter(movement => {
      const splitMovement = movement.date.split(' ');
      const movementDate = new Date(parseInt(splitMovement[3]), months[splitMovement[1]], parseInt(splitMovement[2]));
      console.log(movementDate)
      console.log(startDate)
      return endDate
        ? movementDate >= startDate && movementDate <= endDate
        : movementDate.toDateString() === new Date().toDateString();
    });
    return filteredMovements;
  };

  return {
    getMovementsInSections
  }
}
