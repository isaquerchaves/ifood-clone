package config

import (
	"fmt"
	"log"
	"os"
	"strconv"

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectToDb() {
	// Carregar variáveis de ambiente do arquivo .env apenas se não estiver em produção
	if os.Getenv("RAILWAY_ENVIRONMENT") == "" {
		if err := godotenv.Load(); err != nil {
			log.Println("No .env file found, relying on environment variables")
		}
	}

	host := os.Getenv("DB_HOST")
	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	dbname := os.Getenv("DB_NAME")
	portStr := os.Getenv("DB_PORT")
	sslmode := os.Getenv("DB_SSLMODE")

	port, parseErr := strconv.ParseUint(portStr, 10, 32)
	if parseErr != nil {
		log.Fatalf("Failed to parse port: %v", parseErr)
	}

	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%d sslmode=%s", host, user, password, dbname, port, sslmode)

	// Conectar ao banco de dados
	var connectErr error
	DB, connectErr = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if connectErr != nil {
		log.Fatalf("Failed to connect to the database: %v", connectErr)
	}
}
