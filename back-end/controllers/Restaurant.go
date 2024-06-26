package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/isaquerchaves/ifood-clone/tree/main/back-end/config"
	"github.com/isaquerchaves/ifood-clone/tree/main/back-end/models"
)

func GetAllRestaurant(c *gin.Context) {
	var restaurants []models.Restaurant
	config.DB.Find(&restaurants)

	c.JSON(200, gin.H{
		"restaurants": restaurants,
	})
}
