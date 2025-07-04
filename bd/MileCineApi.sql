USE [master]
GO
/****** Object:  Database [MileCineApi]    Script Date: 12/6/2025 20:22:06 ******/
CREATE DATABASE [MileCineApi]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'MileCineApi', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\MileCineApi.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'MileCineApi_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\MileCineApi_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [MileCineApi] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [MileCineApi].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [MileCineApi] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [MileCineApi] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [MileCineApi] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [MileCineApi] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [MileCineApi] SET ARITHABORT OFF 
GO
ALTER DATABASE [MileCineApi] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [MileCineApi] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [MileCineApi] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [MileCineApi] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [MileCineApi] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [MileCineApi] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [MileCineApi] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [MileCineApi] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [MileCineApi] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [MileCineApi] SET  ENABLE_BROKER 
GO
ALTER DATABASE [MileCineApi] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [MileCineApi] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [MileCineApi] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [MileCineApi] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [MileCineApi] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [MileCineApi] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [MileCineApi] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [MileCineApi] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [MileCineApi] SET  MULTI_USER 
GO
ALTER DATABASE [MileCineApi] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [MileCineApi] SET DB_CHAINING OFF 
GO
ALTER DATABASE [MileCineApi] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [MileCineApi] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [MileCineApi] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [MileCineApi] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [MileCineApi] SET QUERY_STORE = OFF
GO
USE [MileCineApi]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 12/6/2025 20:22:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetRoleClaims]    Script Date: 12/6/2025 20:22:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetRoleClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[RoleId] [nvarchar](450) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetRoleClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetRoles]    Script Date: 12/6/2025 20:22:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetRoles](
	[Id] [nvarchar](450) NOT NULL,
	[Name] [nvarchar](256) NULL,
	[NormalizedName] [nvarchar](256) NULL,
	[ConcurrencyStamp] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetRoles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserClaims]    Script Date: 12/6/2025 20:22:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [nvarchar](450) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetUserClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserLogins]    Script Date: 12/6/2025 20:22:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserLogins](
	[LoginProvider] [nvarchar](450) NOT NULL,
	[ProviderKey] [nvarchar](450) NOT NULL,
	[ProviderDisplayName] [nvarchar](max) NULL,
	[UserId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_AspNetUserLogins] PRIMARY KEY CLUSTERED 
(
	[LoginProvider] ASC,
	[ProviderKey] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserRoles]    Script Date: 12/6/2025 20:22:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserRoles](
	[UserId] [nvarchar](450) NOT NULL,
	[RoleId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_AspNetUserRoles] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUsers]    Script Date: 12/6/2025 20:22:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUsers](
	[Id] [nvarchar](450) NOT NULL,
	[Nombre] [nvarchar](max) NOT NULL,
	[UserName] [nvarchar](256) NULL,
	[NormalizedUserName] [nvarchar](256) NULL,
	[Email] [nvarchar](256) NULL,
	[NormalizedEmail] [nvarchar](256) NULL,
	[EmailConfirmed] [bit] NOT NULL,
	[PasswordHash] [nvarchar](max) NULL,
	[SecurityStamp] [nvarchar](max) NULL,
	[ConcurrencyStamp] [nvarchar](max) NULL,
	[PhoneNumber] [nvarchar](max) NULL,
	[PhoneNumberConfirmed] [bit] NOT NULL,
	[TwoFactorEnabled] [bit] NOT NULL,
	[LockoutEnd] [datetimeoffset](7) NULL,
	[LockoutEnabled] [bit] NOT NULL,
	[AccessFailedCount] [int] NOT NULL,
 CONSTRAINT [PK_AspNetUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserTokens]    Script Date: 12/6/2025 20:22:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserTokens](
	[UserId] [nvarchar](450) NOT NULL,
	[LoginProvider] [nvarchar](450) NOT NULL,
	[Name] [nvarchar](450) NOT NULL,
	[Value] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetUserTokens] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[LoginProvider] ASC,
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Pelicula]    Script Date: 12/6/2025 20:22:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pelicula](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[duracion] [nvarchar](max) NOT NULL,
	[estado] [int] NOT NULL,
	[fecha_creacion] [datetime2](7) NOT NULL,
	[nombre] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Pelicula] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Reserva]    Script Date: 12/6/2025 20:22:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Reserva](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdSala] [int] NOT NULL,
	[fecha_publicacion] [datetime2](7) NOT NULL,
	[fecha_fin] [datetime2](7) NOT NULL,
	[estado] [int] NOT NULL,
	[fecha_creacion] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Reserva] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ReservaPelicula]    Script Date: 12/6/2025 20:22:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ReservaPelicula](
	[ReservaId] [int] NOT NULL,
	[PeliculaId] [int] NOT NULL,
 CONSTRAINT [PK_ReservaPelicula] PRIMARY KEY CLUSTERED 
(
	[ReservaId] ASC,
	[PeliculaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Sala]    Script Date: 12/6/2025 20:22:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sala](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [nvarchar](max) NOT NULL,
	[estado] [int] NOT NULL,
	[fecha_creacion] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Sala] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetRoleClaims_RoleId]    Script Date: 12/6/2025 20:22:06 ******/
CREATE NONCLUSTERED INDEX [IX_AspNetRoleClaims_RoleId] ON [dbo].[AspNetRoleClaims]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [RoleNameIndex]    Script Date: 12/6/2025 20:22:06 ******/
CREATE UNIQUE NONCLUSTERED INDEX [RoleNameIndex] ON [dbo].[AspNetRoles]
(
	[NormalizedName] ASC
)
WHERE ([NormalizedName] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetUserClaims_UserId]    Script Date: 12/6/2025 20:22:06 ******/
CREATE NONCLUSTERED INDEX [IX_AspNetUserClaims_UserId] ON [dbo].[AspNetUserClaims]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetUserLogins_UserId]    Script Date: 12/6/2025 20:22:06 ******/
CREATE NONCLUSTERED INDEX [IX_AspNetUserLogins_UserId] ON [dbo].[AspNetUserLogins]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetUserRoles_RoleId]    Script Date: 12/6/2025 20:22:06 ******/
CREATE NONCLUSTERED INDEX [IX_AspNetUserRoles_RoleId] ON [dbo].[AspNetUserRoles]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [EmailIndex]    Script Date: 12/6/2025 20:22:06 ******/
CREATE NONCLUSTERED INDEX [EmailIndex] ON [dbo].[AspNetUsers]
(
	[NormalizedEmail] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UserNameIndex]    Script Date: 12/6/2025 20:22:06 ******/
CREATE UNIQUE NONCLUSTERED INDEX [UserNameIndex] ON [dbo].[AspNetUsers]
(
	[NormalizedUserName] ASC
)
WHERE ([NormalizedUserName] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Reserva_IdSala]    Script Date: 12/6/2025 20:22:06 ******/
CREATE NONCLUSTERED INDEX [IX_Reserva_IdSala] ON [dbo].[Reserva]
(
	[IdSala] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_ReservaPelicula_PeliculaId]    Script Date: 12/6/2025 20:22:06 ******/
CREATE NONCLUSTERED INDEX [IX_ReservaPelicula_PeliculaId] ON [dbo].[ReservaPelicula]
(
	[PeliculaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Pelicula] ADD  DEFAULT (N'') FOR [nombre]
GO
ALTER TABLE [dbo].[AspNetRoleClaims]  WITH CHECK ADD  CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetRoleClaims] CHECK CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId]
GO
ALTER TABLE [dbo].[AspNetUserClaims]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserClaims] CHECK CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserLogins]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserLogins] CHECK CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserTokens]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserTokens] CHECK CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[Reserva]  WITH CHECK ADD  CONSTRAINT [FK_Reserva_Sala_IdSala] FOREIGN KEY([IdSala])
REFERENCES [dbo].[Sala] ([Id])
GO
ALTER TABLE [dbo].[Reserva] CHECK CONSTRAINT [FK_Reserva_Sala_IdSala]
GO
ALTER TABLE [dbo].[ReservaPelicula]  WITH CHECK ADD  CONSTRAINT [FK_ReservaPelicula_Pelicula_PeliculaId] FOREIGN KEY([PeliculaId])
REFERENCES [dbo].[Pelicula] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ReservaPelicula] CHECK CONSTRAINT [FK_ReservaPelicula_Pelicula_PeliculaId]
GO
ALTER TABLE [dbo].[ReservaPelicula]  WITH CHECK ADD  CONSTRAINT [FK_ReservaPelicula_Reserva_ReservaId] FOREIGN KEY([ReservaId])
REFERENCES [dbo].[Reserva] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ReservaPelicula] CHECK CONSTRAINT [FK_ReservaPelicula_Reserva_ReservaId]
GO
/****** Object:  StoredProcedure [dbo].[SP_01_RESERVA_LISTA]    Script Date: 12/6/2025 20:22:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE  [dbo].[SP_01_RESERVA_LISTA]
AS 
BEGIN

	SELECT *  FROM Reserva r JOIN Sala s on r.IdSala = s.id
END
GO
/****** Object:  StoredProcedure [dbo].[SP_02_BUSCAR_PELICULA]    Script Date: 12/6/2025 20:22:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_02_BUSCAR_PELICULA]
    @PARAMS VARCHAR(255)
AS
BEGIN
    SELECT 
        rp.ReservaId              AS ReservaId,
        rp.PeliculaId             AS PeliculaId,
        p.nombre                  AS Nombre,
        p.estado                  AS EstadoPelicula,    -- <= Aquí el alias
        r.Id                      AS ReservaId2,
        r.fecha_publicacion       AS FechaPublicacion,
        r.fecha_fin               AS FechaFin,
        r.estado                  AS EstadoReserva,
        r.fecha_creacion          AS FechaCreacion,
        s.nombre                  AS Sala
    FROM ReservaPelicula rp
    INNER JOIN Reserva r   ON rp.ReservaId  = r.Id
    INNER JOIN Sala s      ON r.IdSala      = s.Id
    INNER JOIN Pelicula p  ON rp.PeliculaId = p.Id
    WHERE p.nombre LIKE '%' + @PARAMS + '%';
END
GO
/****** Object:  StoredProcedure [dbo].[SP_03_FILTRO_FECHA]    Script Date: 12/6/2025 20:22:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_03_FILTRO_FECHA]
    @INICIO DATETIME,
    @FIN    DATETIME
AS
BEGIN
    SELECT 
        rp.ReservaId              AS ReservaId,
        rp.PeliculaId             AS PeliculaId,
        p.nombre                  AS Nombre,
        p.estado                  AS EstadoPelicula,    -- <= Aquí el alias
        r.Id                      AS ReservaId2,
        r.fecha_publicacion       AS FechaPublicacion,
        r.fecha_fin               AS FechaFin,
        r.estado                  AS EstadoReserva,
        r.fecha_creacion          AS FechaCreacion,
        s.nombre                  AS Sala
    FROM ReservaPelicula rp
    INNER JOIN Reserva r   ON rp.ReservaId  = r.Id
    INNER JOIN Sala s      ON r.IdSala      = s.Id
    INNER JOIN Pelicula p  ON rp.PeliculaId = p.Id
    WHERE r.fecha_publicacion BETWEEN @INICIO AND @FIN;
END
GO
/****** Object:  StoredProcedure [dbo].[SP_03_FILTRO_FECHAA]    Script Date: 12/6/2025 20:22:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_03_FILTRO_FECHAA]
    @INICIO DATETIME,
    @FIN    DATETIME
AS
BEGIN
    SELECT 
        rp.ReservaId,
        rp.PeliculaId,
        p.nombre               AS PeliculaNombre,
        p.estado               AS EstadoPelicula,
        r.Id                   AS ReservaId2,
        r.fecha_publicacion    AS FechaPublicacion,
        r.fecha_fin            AS FechaFin,
        r.estado               AS EstadoReserva,
        r.fecha_creacion       AS FechaCreacion,
        s.nombre               AS SalaNombre
    FROM ReservaPelicula rp
    INNER JOIN Reserva r   ON rp.ReservaId  = r.Id
    INNER JOIN Sala s      ON r.IdSala      = s.Id
    INNER JOIN Pelicula p  ON rp.PeliculaId = p.Id
    WHERE r.fecha_publicacion BETWEEN @INICIO AND @FIN;
END
GO
/****** Object:  StoredProcedure [dbo].[SP_DASHBOARD_01]    Script Date: 12/6/2025 20:22:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_DASHBOARD_01]
AS
BEGIN
SELECT COUNT(*) FROM Reserva
END
GO
/****** Object:  StoredProcedure [dbo].[SP_DASHBOARD_02]    Script Date: 12/6/2025 20:22:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_DASHBOARD_02]
AS
BEGIN
SELECT COUNT(*) AS TotalReservasConMenosDe3Peliculas
FROM (
    SELECT rp.ReservaId
    FROM ReservaPelicula rp
    GROUP BY rp.ReservaId
    HAVING COUNT(*) < 3
) AS SubConsulta;
END
GO
/****** Object:  StoredProcedure [dbo].[SP_DASHBOARD_03]    Script Date: 12/6/2025 20:22:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_DASHBOARD_03]
AS
BEGIN
SELECT COUNT(*) FROM Pelicula
END
GO
/****** Object:  StoredProcedure [dbo].[SP_LISTAR_RESERVAS_01]    Script Date: 12/6/2025 20:22:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SP_LISTAR_RESERVAS_01]
AS
BEGIN
SELECT 
  r.Id, 
  r.IdSala, 
  s.nombre,
  r.fecha_publicacion, 
  r.fecha_fin, 
  r.estado, 
  r.fecha_creacion, 
  COUNT(rp.PeliculaId) AS peliculas_total
FROM Reserva r
INNER JOIN ReservaPelicula rp ON r.Id = rp.ReservaId
INNER JOIN Sala s ON r.IdSala = s.Id
GROUP BY 
  r.Id, 
  r.IdSala, 
  s.nombre,
  r.fecha_publicacion, 
  r.fecha_fin, 
  r.estado, 
  r.fecha_creacion
ORDER BY r.fecha_creacion DESC;

END
GO
/****** Object:  StoredProcedure [dbo].[SP_VER_PELICULA_RESERVAS_02]    Script Date: 12/6/2025 20:22:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_VER_PELICULA_RESERVAS_02]
@RESERVAIDA INT
AS
BEGIN
SELECT ReservaPelicula.ReservaId, ReservaPelicula.PeliculaId, Pelicula.nombre, Pelicula.duracion
FROM     ReservaPelicula INNER JOIN
                  Pelicula ON ReservaPelicula.PeliculaId = Pelicula.Id WHERE ReservaId = @RESERVAIDA
END
GO
USE [master]
GO
ALTER DATABASE [MileCineApi] SET  READ_WRITE 
GO
