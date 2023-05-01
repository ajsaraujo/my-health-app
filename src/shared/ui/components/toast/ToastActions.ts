export interface ToastActions {
  success(message: string, durationInMs?: number): void
  error(message: string, durationInMs?: number): void
  hide(): void
}
