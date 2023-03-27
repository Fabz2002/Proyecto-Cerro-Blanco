import { useState } from 'react'
import { useCommentsRegistered } from '../context/CommentsContext'
function CommentsForm() {
	const { saveComment, setCommentsRegistered } = useCommentsRegistered()
	const [comment, setComment] = useState({
		name: '',
		email: '',
		comment: ''
	})
	const [error, setError] = useState('')
	async function handleSubmit(e) {
		e.preventDefault()
		setError('')
		try {
			console.log('jaja')
			await saveComment(comment.name, comment.email, comment.comment)
			setCommentsRegistered(true)
			setComment({
				name: '',
				email: '',
				comment: ''
			})
		} catch (error) {
			setError(error.toString())
		}
	}
	return (
		<div className=" w-full min-[484px]:w-[450px] md:w-[650px]   m-auto p-3  mt-3">
			{error}
			<h1 className="mb-4 border-b-2 border-[#f3f3f3] w-full text-start text-2xl text-current">
				Deja tu comentario
			</h1>
			<p className="text-sm text-gray-500">Tu email no será publicado.</p>
			<form className="pt-4 text-sm" onSubmit={(e) => handleSubmit(e)}>
				<div className="mb-8 flex  items-center bg-[#f3f3f3] p-1  ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
						className="w-5 h-7 mr-2"
					>
						<path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
					</svg>
					<input
						name="name"
						type="text"
						placeholder="Nickname(obligatorio)"
						value={comment.name}
						className="block w-full outline-none rounded-sm bg-transparent  py-1 p-2"
						onChange={(e) => setComment({ ...comment, name: e.target.value })}
						required
					/>
				</div>
				<div className="mb-8 flex  items-center bg-[#f3f3f3] p-1   ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						className="w-5 h-7 mr-2"
					>
						<path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
					</svg>
					<input
						name="email"
						type="text"
						value={comment.email}
						placeholder="E-mail(obligatorio)"
						className="block w-full outline-none rounded-sm bg-transparent  py-1 p-2"
						onChange={(e) => setComment({ ...comment, email: e.target.value })}
						required
					/>
				</div>
				<div>
					<textarea
						id="comment"
						value={comment.comment}
						rows="4"
						className="block p-2.5 w-full text-sm outline-none bg-gray-50 rounded-lg border border-gray-300 "
						placeholder="Comenta aqui..."
						onChange={(e) =>
							setComment({ ...comment, comment: e.target.value })
						}
					></textarea>
				</div>
				<button className="w-full rounded py-2 px-4 bg-[#78d0ed9c]  text-white mt-3 hover:bg-[#78CFED] hover:text-black">
					COMENTAR
				</button>
			</form>
		</div>
	)
}

export default CommentsForm
