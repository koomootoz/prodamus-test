export default function youtubeParseURL(url: string): string | undefined {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url.match(regExp)

  return (match && match[7].length === 11) ? match[7] : void 0
}
