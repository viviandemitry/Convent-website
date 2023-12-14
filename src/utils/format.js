export function formatCalender(list) {
    return list.map((event) => {
        return {
            'title': event.eventName,
            'start': new Date(event.initialDate),
            'end': new Date(event.finalDate)
        }
    })
}