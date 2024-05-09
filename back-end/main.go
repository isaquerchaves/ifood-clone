package main

import (
	"github.com/gin-gonic/gin"
	"github.com/isaquerchaves/ifood-clone/tree/main/back-end/config"
	"github.com/isaquerchaves/ifood-clone/tree/main/back-end/controllers"
)

func init() {
	config.ConnectToDb()
}

func main() {
	app := gin.Default()

	// Middleware CORS
	app.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	})

	app.GET("categories", controllers.GetAllCategory)
	app.GET("products", controllers.GetAllProduct)

	app.Run("localhost:3002")

}
