import { Button } from '#components/ui/Button'
import { Card, CardContent, CardFooter, CardHeader } from '#components/ui/Card'
import { Link } from 'react-router-dom'
import './styles.css'

const dollarFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export function MenuItem({ title, price, image, children }) {
  return (
    <Card className="menu-item">
      {image != null && <img alt="" {...image} className="menu-item-img" />}
      <CardHeader className="menu-item-header">
        <h2 className="font-bold font-lg">{title}</h2>
        <span className="text-primary font-medium">
          {dollarFormatter.format(price)}
        </span>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <Button asChild>
          <Link to={`/order/${encodeURIComponent(title)}`}>
            Order for delivery
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
