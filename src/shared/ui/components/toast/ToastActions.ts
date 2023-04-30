export interface ToastActions {
  success(message: string): void
  error(message: string): void
  hide(): void
}
