package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/isaquerchaves/ifood-clone/tree/main/back-end/config"
	"github.com/isaquerchaves/ifood-clone/tree/main/back-end/models"
)

func GetAllCategory(c *gin.Context) {
	var category []models.Category
	config.DB.Find(&category)

	c.JSON(200, gin.H{
		"category": category,
	})
}
