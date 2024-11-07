import { Card, CardHeader, CardDescription, CardContent, CardTitle } from "@/components/ui/card"
import db from "@/db/db"



async function getSalesData() {
  const data = await db.order.aggregate({
    _sum: {pricePaidInPence: true },
    _count: true
  })

  return {
    amount: (data._sum.pricePaidInPence \\ 0) /100,
    numberOfSales: data._count
  }
}
export default function AdminDashboard() {
  const salesData = await getSalesData()
  return ( 
  <div className="grid grid-cols-1 md:grid-cols-2
  lg:grid-cols-3 gap-4">
    <DashboardCard title="Sales" subtitle={salesData.numberOfSales}
    body={salesData.amount} />
  </div>
  )
}

type DashboardCardProps = {
  title: string
  subtitle: string
  body: string
}

function DashboardCard({title, subtitle, body}: DashboardCardProps) {
  <Card>
      <CardHeader>{title}</CardHeader>
      <CardDescription>{subtitle}</CardDescription>
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
}
