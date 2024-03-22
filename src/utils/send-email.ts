import { FormData } from '@/components/Contact'

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email'

  return fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
