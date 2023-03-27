import { useState, useContext, createContext } from 'react'
import { db } from '../../firebase.js'
import {
	doc,
	setDoc,
	collection,
	getDocs,
	QuerySnapshot
} from 'firebase/firestore'
const commentsContext = createContext()
export const useCommentsRegistered = () => {
	const comContext = useContext(commentsContext)
	if (!comContext) throw new Error('There is no comments provider')
	return comContext
}
export function CommentsContextProvider({ children }) {
	const [commentsRegistered, setCommentsRegistered] = useState(false)
	const saveComment = (name, email, comment) => {
		const commentRef = collection(db, 'comments') // obtener una referencia a la colección "comments"
		const newCommentRef = doc(commentRef) // Crea una nueva referencia de documento con un ID único
		const commentSaved = setDoc(newCommentRef, {
			name,
			email,
			comment
		})
		return commentSaved
	}
	async function loadComments() {
		const querySnapshot = await getDocs(collection(db, 'comments'))

		const comments = querySnapshot.docs.map((doc) => doc.data())

		return comments
	}

	return (
		<commentsContext.Provider
			value={{
				commentsRegistered,
				setCommentsRegistered,
				saveComment,
				loadComments
			}}
		>
			{children}
		</commentsContext.Provider>
	)
}
