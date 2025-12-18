import { getBookings} from '../../lib/tasks'
import SectionPost from './SectionPost'

export default async function SectionPostWrapper() {
    const bookings = await getBookings()
    return <SectionPost bookings={bookings} />
}