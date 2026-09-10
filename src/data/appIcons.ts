export const appIcons = {
  openai: '/app-icon/openai.svg',
  canva: '/app-icon/canva.svg',
  capcut: '/app-icon/capcut.svg',
  grammarly: '/app-icon/grammarly.svg',
  google: '/app-icon/google.svg',
  apple: '/app-icon/apple.svg',
} as const

export const productAppIcons: Partial<Record<string, string>> = {
  chatgpt: appIcons.openai,
  canva: appIcons.canva,
  capcut: appIcons.capcut,
  grammarly: appIcons.grammarly,
}
