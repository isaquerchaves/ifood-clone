package models

type CategoryToRestaurant struct {
	CategoryID   string `gorm:"column:A"`
	RestaurantID string `gorm:"column:B"`
	Category     Category
}

func (CategoryToRestaurant) TableName() string {
	return "_CategoryToRestaurant"
}

func (CategoryToRestaurant) SchemaName() string {
	return "public"
}
