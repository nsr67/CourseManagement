package com.project.AUM;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.Assert.assertNotNull;

//@RunWith(SpringRunner.class)
@SpringBootTest
public class AumApplicationTests {
	@Test
	void contextLoads() {
		assertNotNull(AumApplication.class);
	}

}
