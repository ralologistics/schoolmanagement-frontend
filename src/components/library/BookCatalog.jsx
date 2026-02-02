import React, { useEffect, useState } from 'react'

export default function BookCatalog() {
    const [loading, setLoading] = useState(true)
    const [books, setBooks] = useState([])

    useEffect(() => {
        // setLoading(true)
        setTimeout(() => {
            setBooks([
                { isbn: 'ISBN-001', title: 'Mathematics Grade 10', author: 'NCERT', quantity: 15 },
                { isbn: 'ISBN-002', title: 'Science Textbook', author: 'NCERT', quantity: 22 },
                { isbn: 'ISBN-003', title: 'English Literature', author: 'Anonymous', quantity: 8 }
            ])
            setLoading(false)
        }, 400)
    }, [])

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">Book Catalog</h3>
            {loading ? (
                <div className="text-sm text-slate-500 mt-2">Loading catalog...</div>
            ) : (
                <ul className="mt-3 text-sm text-slate-700 space-y-1">
                    {books.map(b => <li key={b.isbn}>{b.title} by {b.author} — {b.quantity} copies</li>)}
                </ul>
            )}
        </div>
    )
}
