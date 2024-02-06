interface NoteCardProps {

}

export function NoteCard ({}: NoteCardProps) {
  return (
    <button className='rounded-md bg-slate-800 text-left p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-lime-400 focus-visible:ring-2 focus-visible:ring-lime-400'>
      <span className='text-sm font-medium text-slate-200'>há 4 dias</span>

      <p className='text-sm leading-6 text-slate-400'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
        pariatur nobis nihil quasi id, ex odit possimus quia. Non ipsam tenetur
        necessitatibus explicabo quia eveniet numquam vero. Maiores, nesciunt
        repellendus?
      </p>

      <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
    </button>
  )
}
