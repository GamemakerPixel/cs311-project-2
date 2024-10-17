import Link from "next/link"


export default function NavigationBar() {
  const title = "Repetition"
  const titlePath = "/"

  interface Page {
    displayName: string
    path: string
  }

  const pages = [
    {name: "Add Card", path: "/add"},
    {name: "Study", path: "/study"},
    {name: "Summary", path: "/summary"},
  ]


  function bleh() {
    return <div>turt</div>
  }


  return (
    <nav className="bg-secondary h-20">
      <Link href={titlePath}>
        {title}
      </Link>
      {
        pages.map((page) => (
          <Link href={page.path} className="mx-4">
            {page.name}
          </Link>
        ))
      }
    </nav>
  )
}
