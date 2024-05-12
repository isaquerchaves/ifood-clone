package models

import "gorm.io/gorm"

type Product struct {
	gorm.Model
	ID                 string     `gorm:"primaryKey"`
	Name               string     `gorm:"column:name"`
	Description        string     `gorm:"column:description"`
	ImageUrl           string     `gorm:"column:imageUrl"`
	Price              float64    `gorm:"column:price"`
	DiscountPercentage int32      `gorm:"column:discountPercentage"`
	RestaurantID       string     `gorm:"column:restaurantId"`
	CategoryID         string     `gorm:"column:categoryId"`
	Deleted_at         string     `gorm:"column:deleted_at"`
	Restaurant         Restaurant // Relacionamento um-para-um, cada produto pertence a um restaurante
}

func (Product) TableName() string {
	return "Product"
}

func (Product) SchemaName() string {
	return "public"
}
