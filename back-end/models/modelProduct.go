package models

import (
	"gorm.io/gorm"
)

type Product struct {
	gorm.Model
	ID                 string  `gorm:"primaryKey"`
	Name               string  `gorm:"column:name"`
	Description        string  `gorm:"column:description"`
	ImageUrl           string  `gorm:"column:imageUrl"`
	Price              float64 `gorm:"column:price"`
	DiscountPercentage int32   `gorm:"column:discountPercentage"`
	RestaurantId       string  `gorm:"column:restaurantId"`
	CategoryId         string  `gorm:"column:categoryId"`
	Deleted_at         string  `gorm:"column:deleted_at"`
}

func (Product) TableName() string {
	return "Product"
}

func (Product) SchemaName() string {
	return "public"
}
