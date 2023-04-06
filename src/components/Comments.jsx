import CommentsBox from './CommentsBox'
import CommentsForm from './CommentsForm'
import { CommentsContextProvider } from '../context/CommentsContext'
function Comments() {
	return (
		<div className="bg-white h-full mb-4">
			<CommentsContextProvider>
				<CommentsBox />
				<CommentsForm />
			</CommentsContextProvider>
		</div>
	)
}
export default Comments
