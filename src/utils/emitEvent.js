export function triggerEvent(element, eventName, eventData) {
  const event = new Event(eventName);
  event.details = eventData;
  element.dispatchEvent(event);
}

export function getElementEmitter(element) {
  return (eventName, eventData) => triggerEvent(element, eventName, eventData);
}
