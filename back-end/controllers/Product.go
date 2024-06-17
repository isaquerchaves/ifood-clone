package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/isaquerchaves/ifood-clone/tree/main/back-end/config"
	"github.com/isaquerchaves/ifood-clone/tree/main/back-end/models"
)

func GetAllProduct(c *gin.Context) {
	var products []models.Product

	// Realiza o join com a tabela de restaurantes e traz as informações do restaurante
	config.DB.Preload("Restaurant").Find(&products)

	c.JSON(200, gin.H{
		"products": products,
	})
}
