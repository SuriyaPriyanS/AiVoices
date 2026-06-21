import VoiceUploadWizard from '@/components/voice/VoiceUploadWizard'
import VoicesManager from '@/components/voice/VoicesManager'

export default function VoicesPage() {
  return (
    <div className="space-y-6">
      <VoiceUploadWizard />
      <VoicesManager />
    </div>
  )
}
