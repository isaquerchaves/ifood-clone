package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/isaquerchaves/ifood-clone/tree/main/back-end/config"
	"github.com/isaquerchaves/ifood-clone/tree/main/back-end/models"
)

func GetAllCategoryToRestaurant(c *gin.Context) {
	var categories []models.CategoryToRestaurant
	config.DB.Preload("Category").Find(&categories)

	c.JSON(200, gin.H{
		"categories": categories,
	})
}
