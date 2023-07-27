
package com.iamneo.security.repository;


import java.util.List;

import org.springframework.data.domain.Sort.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.job_history;
@Repository
public interface job_history_repo extends JpaRepository<job_history,Integer>{

	static Streamable<Order> findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	void deleteById(Long id);



}