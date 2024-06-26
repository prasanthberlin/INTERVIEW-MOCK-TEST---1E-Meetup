import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundContent,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundContent>
      We are sorry, the page you requested could not be found.
    </NotFoundContent>
  </NotFoundContainer>
)

export default NotFound
