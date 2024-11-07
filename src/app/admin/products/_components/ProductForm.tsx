"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormatCurrency } from "@/lib/formatters"
import { useState } from "react"

export function ProductForm() {
  const [princeInPence, setPriceInPence] = useState<number>()

  return ( 
  <form className="space-y-8">
    <div className="space-y-2">
      <Label htmlFor="name">Name</Label>
      <Input type="text" id="name" name="name" required />
    </div>
  <form className="space-y-8">
    <div className="space-y-2">
      <Label htmlFor="priceInPence">Price In Pence</Label>
      <Input type="number" id="priceInPence" name="priceInPence" required  value= {priceInPence} onChange={e => setPriceInPence(Number(e.target.value) || undefined)} 
      />
      <div className="text-muted-foreground">{FormatCurrency((priceInPence || 0) / 100)}
      </div>
    </div>  
  </form>
  )
}