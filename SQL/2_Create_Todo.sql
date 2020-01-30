USE [Productive_ToDoList]
GO

/****** Object:  Table [dbo].[Todo]    Script Date: 1/29/2020 7:44:39 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Todo](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [varchar](50) NULL,
	[NumberOfPomerdoros] [int] NULL,
	[Complete] [bit] NULL,
 CONSTRAINT [PK_todo] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Todo] ADD  CONSTRAINT [DF_Todo_Complete]  DEFAULT ((0)) FOR [Complete]
GO


