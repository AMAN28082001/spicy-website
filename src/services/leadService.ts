interface LeadData {
  name: string
  email: string
  phone: string
  message: string
  interestedProducts: string[]
}

export const sendLeadData = async (data: LeadData): Promise<void> => {
  // In a real application, this would send the data to your backend API
  // For now, we'll simulate a successful API call with a delay

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Lead data submitted:", data)
      resolve()
    }, 1000)
  })
}
