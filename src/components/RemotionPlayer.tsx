import { Player } from '@remotion/player'
import { PicPhoneShowcase } from '../remotion/PicPhoneShowcase'

/** Heavy Remotion runtime — imported only via React.lazy so it stays in its own chunk. */
export default function RemotionPlayer() {
  return (
    <Player
      component={PicPhoneShowcase}
      durationInFrames={180}
      fps={30}
      compositionWidth={1280}
      compositionHeight={720}
      style={{ width: '100%', height: '100%' }}
      autoPlay
      loop
      controls={false}
      clickToPlay={false}
      doubleClickToFullscreen={false}
      numberOfSharedAudioTags={0}
    />
  )
}
