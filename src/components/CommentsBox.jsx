import { useEffect, useState } from 'react'
import { useCommentsRegistered } from '../context/CommentsContext'

import CommentsSlider from './CommentsSlider'

function CommentsBox() {
	const { loadComments } = useCommentsRegistered()
	const [comments, setComments] = useState()
	async function loadingComments() {
		const comments = await loadComments()
		setComments(comments)
	}
	useEffect(() => {
		loadingComments()
	}, [comments])

	return (
		<section
			className="h-[400px]  md:min-h-screen  w-full bg-center bg-cover opacity-80 bg-[url('../../img/CommentsBackground.jpg')] flex items-center justify-center flex-wrap
         "
		>
			{comments ? <CommentsSlider comments={comments} /> : <NoComments/>}
		</section>
	)
}

function NoComments() {
	return (
		<div className="flex  w-full items-center justify-center  text-white ">
			<p className="text-gray-500 text-2xl text-center self-center">
				Deja tus comentarios (Demorara en cargar por el exceso de comentarios
				actualmente)👇
			</p>
		</div>
	)
}
export default CommentsBox
