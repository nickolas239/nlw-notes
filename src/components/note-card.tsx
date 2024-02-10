import * as Dialog from '@radix-ui/react-dialog'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { X } from 'lucide-react'

interface NoteCardProps {
    note: {
        id: string
        date: Date
        content: string
    }
    onNoteDeleted: (id: string) => void
}

export function NoteCard({ note, onNoteDeleted }: NoteCardProps) {
    return (
        <Dialog.Root>
            <Dialog.Trigger className='rounded-md text-left flex flex-col bg-emerald-800 p-5 gap-3 overflow-hidden relative hover:ring-2 hover:ring-emerald-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none'>
                <span className='text-sm font-medium text-emerald-300'>
                    {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
                </span>
                <p className='text-sm leading-6 text-emerald-400'>
                    {note.content}
                </p>

                <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className='inset-0 fixed bg-black/50'>
                    <Dialog.Content className='fixed overflow-hidden inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[60vh] bg-emerald-700 md:rounded-md flex flex-col outline-none'>
                        <Dialog.Close className='absolute right-0 top-0 bg-emerald-800 p-1.5 text-emerald-400 rounded-bl-md'>
                            <X className='size-5 hover:text-emerald-100'/>
                        </Dialog.Close>
                        <div className='flex flex-1 flex-col gap-3 p-5'>
                            <span className='text-sm font-medium text-emerald-300'>
                                {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
                            </span>
                            <p className='text-sm leading-6 text-emerald-400'>
                                {note.content}
                            </p>
                        </div>

                        <button type='button' onClick={() => onNoteDeleted(note.id)} className='w-full bg-emerald-800 py-4 text-center text-sm text-emerald-300 outline-none font-medium group hover:bg-emerald-900'>
                           Deseja <span className='text-red-400 group-hover:underline'>excluir essa nota?</span>
                        </button>
                    </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>
        </Dialog.Root>
    )
}