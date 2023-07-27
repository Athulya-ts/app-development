package com.iamneo.security.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "events")
public class events {
	@Id
	@GeneratedValue
	private Long id;
	private Long events_id;
	private String event_name;
	private String event_start_date;
	private String event_end_date;
	private String event_duration;
	private String department;
	private String event_location;
}
