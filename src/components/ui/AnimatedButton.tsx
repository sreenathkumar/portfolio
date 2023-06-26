import '../../assets/css/animated-button.css'

export default function AnimatedButton({ link, text }: { link: string, text: string }) {
  return (
    <a className="animated-button bg-transparent font-base px-6 py-4 border rounded inline-block mx-auto" href={link}>{text}</a>
  )
}
