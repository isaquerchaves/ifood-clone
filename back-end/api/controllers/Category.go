package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/isaquerchaves/ifood-clone/tree/main/back-end/api/config"
	"github.com/isaquerchaves/ifood-clone/tree/main/back-end/api/models"
)

func GetAllCategory(c *gin.Context, w http.ResponseWriter, r *http.Request) {
	var categories []models.Category

	config.DB.Preload("Product").Find(&categories)

	c.JSON(200, gin.H{
		"categories": categories,
	})
}
