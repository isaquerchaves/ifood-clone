package models

import "gorm.io/gorm"

type Restaurant struct {
	gorm.Model
	ID                  string    `gorm:"primaryKey"`
	Name                string    `gorm:"column:name"`
	ImageUrl            string    `gorm:"column:imageUrl"`
	DeliveryFee         float64   `gorm:"column:deliveryFee"`
	DeliveryTimeMinutes int32     `gorm:"column:deliveryTimeMinutes"`
	Deleted_at          string    `gorm:"column:deleted_at"`
	Products            []Product // Relacionamento um-para-muitos, um restaurante pode ter muitos produtos
}

func (Restaurant) TableName() string {
	return "Restaurant"
}

func (Restaurant) SchemaName() string {
	return "public"
}
