package models

import "gorm.io/gorm"

type Category struct {
	gorm.Model
	ID         string `gorm:"primaryKey"`
	Name       string `gorm:"column:name"`
	ImageUrl   string `gorm:"column:imageUrl"`
	Deleted_at string `gorm:"column:deleted_at"`
	Product    []Product
}

func (Category) TableName() string {
	return "Category"
}

func (Category) SchemaName() string {
	return "public"
}
