USE [Productive_ToDoList]
GO

/****** Object:  Table [dbo].[DayRating]    Script Date: 1/29/2020 7:43:51 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[DayRating](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Date] [date] NULL,
	[DayRating] [smallint] NULL,
	[DayDetails] [varchar](500) NULL,
	[DayNotes] [varchar](500) NULL
) ON [PRIMARY]
GO


